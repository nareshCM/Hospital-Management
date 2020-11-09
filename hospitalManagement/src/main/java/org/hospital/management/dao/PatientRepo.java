package org.hospital.management.dao;

import org.hospital.management.model.PatientDetail;
import org.springframework.data.repository.CrudRepository;

/*
 * patient detail DAO 
 */
public interface PatientRepo extends CrudRepository<PatientDetail, String> {

}
