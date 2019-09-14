package com.michael.springbootlearning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProviderController {

    @GetMapping("/providers")
    public String list(){
        return "provider/list";
    }
}
