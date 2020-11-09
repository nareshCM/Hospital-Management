package org.hospital.management.exception.handler;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class NullPointerException extends RuntimeException {

	public NullPointerException(String exception) {
	  super(exception);
    }
}
