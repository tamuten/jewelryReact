package com.jewlry.app.models;

import com.jewlry.app.Shozoku;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Tantosha {
    private Integer id;
    private String name;
    private Shozoku shozoku;
}
