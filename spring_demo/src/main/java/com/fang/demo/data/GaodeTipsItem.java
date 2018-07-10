package com.fang.demo.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import lombok.AllArgsConstructor;

import java.io.IOException;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
@lombok.Getter
@JsonDeserialize(using = GaodeTipsItem.GaodeTipsItemJsonDeserializer.class)
@AllArgsConstructor
public class GaodeTipsItem {
    String id;
    String name;
    String district;
    String adcode;
    String location;
    String typecode;

    public static class GaodeTipsItemJsonDeserializer extends StdDeserializer<GaodeTipsItem> {

        public GaodeTipsItemJsonDeserializer() {
            super(GaodeTipsItem.class);
        }

        @Override
        public GaodeTipsItem deserialize(final JsonParser jp, final DeserializationContext ctxt)
                throws IOException, JsonProcessingException {

            ObjectCodec oc = jp.getCodec();
            JsonNode node = oc.readTree(jp);
            final String id = node.get("id").asText();
            final String name = node.get("name").asText();
            final String district = node.get("district").asText();
            final String adcode = node.get("adcode").asText();
            final String location = node.get("location").asText();
            final String typecode = node.get("typecode").asText();
            return new GaodeTipsItem(id, name, district, adcode, location, typecode);
        }
    }
}
