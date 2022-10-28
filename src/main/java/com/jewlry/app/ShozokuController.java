package com.jewlry.app;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/shozoku")
public class ShozokuController {

    private final ShozokuRepository repository;

    public ShozokuController(ShozokuRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/list")
    public List<Shozoku> getList() {
        return this.repository.getList();
    }

    @GetMapping("{id}")
    public Shozoku findById(@PathVariable Integer id) {
        return this.repository.findById(id);
    }

    @PostMapping("/create")
    public void create(@RequestBody Shozoku shozoku) {
        this.repository.create(shozoku);
    }

    @PostMapping("/update")
    public void update(@RequestBody Shozoku shozoku) {
        this.repository.update(shozoku);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        this.repository.delete(id);
    }

}
