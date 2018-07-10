package com.fang.demo.request;

import com.fang.demo.data.GaodeTipsItem;
import com.fang.demo.response.GaodePOIDetailResponse;
import com.fang.demo.response.GaodeTipsResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.squareup.okhttp.*;

import java.util.Optional;

public class GaodeRequest extends BaseRequest {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private static final String KEY = "525ac069ea0f2705eeae804876b3a80b";
    private static final String POI_TYPE = "050301";
    private static final String TYPE_AHEAD_URL = "https://restapi.amap.com/v3/assistant/inputtips";
    private static final String SEARCH_POI_ID_URL = "https://restapi.amap.com/v3/place/detail";

    public static Optional<GaodeTipsResponse> searchHint(String hint) {
        HttpUrl.Builder urlBuilder = HttpUrl.parse(TYPE_AHEAD_URL).newBuilder();
        urlBuilder.addQueryParameter("key", KEY);
        urlBuilder.addQueryParameter("keywords", hint);
        urlBuilder.addQueryParameter("datatype", "poi");
        String url = urlBuilder.build().toString();
        try {
            byte[] responseJson = doGetRequest(url);
            return Optional.of(OBJECT_MAPPER.readValue(responseJson, GaodeTipsResponse.class));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }

    public static Optional<GaodePOIDetailResponse> searchPOIById(String poiId) {
        HttpUrl.Builder urlBuilder = HttpUrl.parse(SEARCH_POI_ID_URL).newBuilder();
        urlBuilder.addQueryParameter("key", KEY);
        urlBuilder.addQueryParameter("id", poiId);
        String url = urlBuilder.build().toString();
        try {
            byte[] responseJson = doGetRequest(url);
            return Optional.of(OBJECT_MAPPER.readValue(responseJson, GaodePOIDetailResponse.class));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }
}
