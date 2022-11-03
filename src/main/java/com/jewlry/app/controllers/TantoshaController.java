package com.jewlry.app.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jewlry.app.Repositories.TantoshaRepository;
import com.jewlry.app.models.Tantosha;

@RestController
@RequestMapping("/api/tantosha")
public class TantoshaController {
    private final TantoshaRepository repository;

    public TantoshaController(TantoshaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/list")
    public List<Tantosha> getList() {
        return this.repository.getList();
    }
}
