package com.fang.demo.controller;

import com.fang.demo.request.GaodeRequest;
import com.fang.demo.response.GaodeTipsResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GaodeController {

    @RequestMapping("/type_ahead")
    public GaodeTipsResponse typeAhead(@RequestParam(value="name", defaultValue="World") String name) {
        GaodeTipsResponse response = GaodeRequest.searchHint(name).get();
        return response;
    }
}
