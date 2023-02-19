use candid::CandidType;
use serde::Deserialize;

pub const CONTENT_TYPE_HEADER_KEY: &str = "content-type";

pub const CORS: &str = "Access-Control-Allow-Origin";

pub type HttpHeader = (String, String);

#[derive(CandidType, Deserialize, Debug, PartialEq, Clone)]
pub struct HttpRequest {
    // GET, HEAD, POST
    pub method: String,
    pub url: String,
    pub headers: Vec<HttpHeader>,
    pub body: Option<Vec<u8>>,
    pub upgrade: Option<bool>,
}

#[derive(CandidType, Deserialize, Debug, PartialEq, Clone)]
pub struct HttpResponse {
    pub status_code: u16,
    pub headers: Vec<HttpHeader>,
    pub body: Vec<u8>,
    pub streaming_strategy: Option<String>,
}