package org.hospital.management.exception.handler;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.hospital.management.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {
	
	@ExceptionHandler({ KeyConstraintException.class })
	protected ResponseEntity<Object> handleKeyConstraint(KeyConstraintException ex) {
		ErrorResponse error = new ErrorResponse();
		error.setStatus(false);
		error.setErrorMessage(ex.getMessage());
		error.setErrorCode(547);
		//LOG.error(error.getMessage(),error.getDetails());
		return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler({DataNotFoundException.class})
	public ResponseEntity<Object> handleDataNotFound(DataNotFoundException ex){
		ErrorResponse error = new ErrorResponse();
		error.setStatus(false);
		error.setErrorMessage(ex.getMessage());
		error.setErrorCode(404);
		return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler({NullPointerException.class})
	public ResponseEntity<Object> handlerNullpointer(NullPointerException ex){
		ErrorResponse error = new ErrorResponse();
		error.setStatus(false);
		error.setErrorMessage(ex.getMessage());
		error.setErrorCode(404);
		return new ResponseEntity<>(error,HttpStatus.PARTIAL_CONTENT);
	}
	
	@ExceptionHandler({IllegalArgumentException.class})
	public ResponseEntity<Object> handleIllegalArgument(IllegalArgumentException ex){
		ErrorResponse error = new ErrorResponse();
		error.setStatus(false);
		error.setErrorMessage(ex.getMessage());
		error.setErrorCode(400);
		return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler({EmptyResultException.class})
	public ResponseEntity<Object> handleEmptyResultException(EmptyResultException ex){
		ErrorResponse error = new ErrorResponse();
		error.setStatus(false);
		error.setErrorMessage(ex.getMessage());
		error.setErrorCode(404);
		return new ResponseEntity<>(error,HttpStatus.NO_CONTENT);
	}
}
