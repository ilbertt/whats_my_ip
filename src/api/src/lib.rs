use candid::candid_method;
use http::{
    HttpRequest,
    HttpResponse,
    CONTENT_TYPE_HEADER_KEY,
    ACCESS_CONTROL_ALLOW_ORIGIN_HEADER_KEY,
};
use ic_cdk::{ print, query };
use serde_json::{ to_vec, Map, Value };

pub mod http;

#[query]
#[candid_method(query)]
fn http_request(req: HttpRequest) -> HttpResponse {
    // only allow GET method
    if req.method != "GET" {
        return HttpResponse {
            status_code: 405,
            headers: vec![
                (String::from(CONTENT_TYPE_HEADER_KEY), String::from("plain/text")),
                (String::from(ACCESS_CONTROL_ALLOW_ORIGIN_HEADER_KEY), String::from("*"))
            ],
            body: "Method Not Allowed".into(),
            streaming_strategy: None,
        };
    }

    print(format!("Request headers: {:?}", req.headers));

    // create a JSON object from the headers
    let mut map = Map::new();

    for (key, val) in req.headers.into_iter() {
        map.insert(key, Value::String(val));
    }

    let obj = Value::Object(map);

    // convert the JSON object to a byte vector
    let (body, content_type, status_code) = match to_vec(&obj) {
        Ok(b) => (b, "application/json", 200),
        Err(e) => {
            let err = format!("Error: {:?}", e);

            print(&err);

            (err.into(), "plain/text", 500)
        }
    };

    HttpResponse {
        status_code,
        headers: vec![
            (String::from(CONTENT_TYPE_HEADER_KEY), String::from(content_type)),
            (String::from(ACCESS_CONTROL_ALLOW_ORIGIN_HEADER_KEY), String::from("*"))
        ],
        body,
        streaming_strategy: None,
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use candid::{ export_service, utils::{ service_compatible, CandidSource } };
    use std::env;

    #[test]
    fn check_candid_interface() {
        let dir = env::current_dir().unwrap();
        let did_name = "api.did";
        let did_path = dir.join(did_name);

        export_service!();
        let new_interface = __export_service();

        println!("{}", &new_interface);

        service_compatible(
            CandidSource::Text(&new_interface),
            CandidSource::File(&did_path)
        ).unwrap();
    }
}