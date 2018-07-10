package com.fang.demo.controller;

import com.fang.demo.data.GaodePOIItem;
import com.fang.demo.request.GaodeRequest;
import com.fang.demo.response.GaodePOIDetailResponse;
import com.fang.demo.response.GaodeTipsResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GaodeController {

    @RequestMapping("/type_ahead")
    @CrossOrigin("http://localhost:3000")
    public GaodeTipsResponse typeAhead(@RequestParam(value="name", defaultValue="World") String name) {
        GaodeTipsResponse response = GaodeRequest.searchHint(name).get();
        return response;
    }

    @RequestMapping("/search_poi_by_id")
    @CrossOrigin("http://localhost:3000")
    public GaodePOIDetailResponse searchPOIById(@RequestParam(value="id") String id) {
        GaodePOIDetailResponse response = GaodeRequest.searchPOIById(id).get();
        return response;
    }
}
