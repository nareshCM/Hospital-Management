package org.hospital.management.exception.handler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class IllegalArgumentException extends RuntimeException {

	public IllegalArgumentException(String exception) {
		super(exception);
	}
}
