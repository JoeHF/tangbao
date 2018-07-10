package com.fang.demo.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
@lombok.Getter
public class GaodeBaseResponse {
    String status;
    String info;
    int count;
    String infocode;
}
