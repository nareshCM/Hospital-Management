package org.hospital.management.exception.handler;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class KeyConstraintException extends RuntimeException {

	public KeyConstraintException(String exception) {
		super(exception);
	}
}
