package com.fang.demo.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@lombok.Getter
@JsonDeserialize(using = GaodePOIItem.GaodePOIItemJsonDeserializer.class)
@AllArgsConstructor
@Builder
public class GaodePOIItem {
    String id;
    String name;
    String type;
    String typecode;
    String address;
    String location;
    String tel;
    String pcode;
    String pname;
    String citycode;
    String cityname;
    String adcode;
    String adname;
    String navi_poiid;
    String gridcode;
    List<String> photos;

    public static class GaodePOIItemJsonDeserializer extends StdDeserializer<GaodePOIItem> {

        public GaodePOIItemJsonDeserializer() {
            super(GaodePOIItem.class);
        }

        @Override
        public GaodePOIItem deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            ObjectCodec oc = jp.getCodec();
            JsonNode node = oc.readTree(jp);
            final String id = node.get("id").asText();
            final String name = node.get("name").asText();
            final String type = node.get("type").asText();
            final String typecode = node.get("typecode").asText();
            final String address = node.get("address").asText();
            final String location = node.get("location").asText();
            final String tel = node.get("tel").asText();
            final String pcode = node.get("pcode").asText();
            final String pname = node.get("pname").asText();
            final String citycode = node.get("citycode").asText();
            final String cityname = node.get("cityname").asText();
            final String adcode = node.get("adcode").asText();
            final String adname = node.get("adname").asText();
            final String navi_poiid = node.get("navi_poiid").asText();
            final String gridcode = node.get("gridcode").asText();
            List<String> photos = new ArrayList<>();
            node.get("photos").iterator().forEachRemaining(photoNode -> photos.add(photoNode.get("url").asText()));


            return new GaodePOIItemBuilder()
                    .id(id)
                    .name(name)
                    .type(type)
                    .typecode(typecode)
                    .address(address)
                    .location(location)
                    .tel(tel)
                    .pcode(pcode)
                    .pname(pname)
                    .citycode(citycode)
                    .cityname(cityname)
                    .adcode(adcode)
                    .adname(adname)
                    .navi_poiid(navi_poiid)
                    .gridcode(gridcode)
                    .photos(photos)
                    .build();
        }
    }
}
