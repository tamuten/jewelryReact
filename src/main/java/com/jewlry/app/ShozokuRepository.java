package com.jewlry.app;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jewlry.app.mapper.ShozokuMapper;

@Repository
public class ShozokuRepository {

    private final ShozokuMapper mapper;

    public ShozokuRepository(ShozokuMapper mapper) {
        this.mapper = mapper;
    }

    public List<Shozoku> getList() {
        return this.mapper.getList();
    }

    public Shozoku findById(Integer id) {
        return this.mapper.findById(id);
    }

    public int create(Shozoku shozoku) {
        return this.mapper.create(shozoku);
    }

    public int update(Shozoku shozoku) {
        return this.mapper.update(shozoku);
    }

    public int delete(Integer id) {
        return this.mapper.delete(id);
    }
}
