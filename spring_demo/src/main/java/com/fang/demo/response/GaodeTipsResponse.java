package com.fang.demo.response;

import com.fang.demo.data.GaodeTipsItem;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jdk.nashorn.internal.objects.annotations.Getter;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@lombok.Getter
public class GaodeTipsResponse {
    String status;
    String info;
    int count;
    List<GaodeTipsItem> tips;
}
