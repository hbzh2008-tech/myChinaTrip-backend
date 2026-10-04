package com.chinatrip.api.web;

import com.chinatrip.api.dto.HealthResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

	@GetMapping("/health")
	public HealthResponse health() {
		return HealthResponse.forService("api");
	}
}
