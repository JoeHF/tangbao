package com.fang.demo.response;

import com.fang.demo.data.GaodePOIItem;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@lombok.Getter
public class GaodePOIDetailResponse extends GaodeBaseResponse {
    List<GaodePOIItem> pois;
}
