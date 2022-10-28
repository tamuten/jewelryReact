package com.jewlry.app.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.jewlry.app.Shozoku;

@Mapper
public interface ShozokuMapper {
    public List<Shozoku> getList();
    public Shozoku findById(Integer id);
    public int create(Shozoku shozoku);
    public int update(Shozoku shozoku);
    public int delete(Integer id);
}
