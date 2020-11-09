package org.hospital.management.exception.handler;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class EmptyResultException extends RuntimeException {

	public EmptyResultException(String exception) {
		super(exception);
	}
}
