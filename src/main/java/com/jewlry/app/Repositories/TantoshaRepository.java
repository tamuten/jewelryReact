package com.jewlry.app.Repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jewlry.app.mapper.TantoshaMapper;
import com.jewlry.app.models.Tantosha;

@Repository
public class TantoshaRepository {
    private final TantoshaMapper mapper;

    public TantoshaRepository(TantoshaMapper mapper) {
        this.mapper = mapper;
    }

    public List<Tantosha> getList() {
        return this.mapper.getList();
    }

    public Tantosha findbyId(Integer id) {
        return this.mapper.findById(id);
    }

    public int create(Tantosha tantosha) {
        return this.mapper.create(tantosha);
    }

    public int update(Tantosha tantosha) {
        return this.mapper.update(tantosha);
    }

    public int delete(Integer id) {
        return this.mapper.delete(id);
    }
}
