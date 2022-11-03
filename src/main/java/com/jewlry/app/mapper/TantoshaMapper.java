package com.jewlry.app.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.jewlry.app.models.Tantosha;

@Mapper
public interface TantoshaMapper {
    public List<Tantosha> getList();
    public Tantosha findById(Integer id);
    public int create(Tantosha tantosha);
    public int update(Tantosha tantosha);
    public int delete(Integer id);
}
