package com.fang.demo.request;

import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import java.io.IOException;

public class BaseRequest {
    private static final OkHttpClient client = new OkHttpClient();

    protected static byte[] doGetRequest(String url) throws IOException {
        Request request = new Request.Builder()
                .url(url)
                .build();

        Response response = client.newCall(request).execute();
        System.out.println(response.body().toString());
        return response.body().bytes();
    }
}
