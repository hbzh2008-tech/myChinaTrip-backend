package com.chinatrip.api.dto;

/**
 * Mirrors {@code packages/shared} {@code healthSchema} JSON shape for {@code GET /health}.
 */
public record HealthResponse(boolean ok, String service) {

	public static HealthResponse forService(String service) {
		return new HealthResponse(true, service);
	}
}
