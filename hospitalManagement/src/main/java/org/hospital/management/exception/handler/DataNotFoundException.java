package org.hospital.management.exception.handler;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class DataNotFoundException extends RuntimeException {

	public DataNotFoundException(String exception){
		super(exception);
	}
}
