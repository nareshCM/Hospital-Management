package org.hospital.management.dao;

import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
 * doctor detail DAO 
 */
@Repository
public interface DoctorRepo extends CrudRepository<DoctorDetail, String>{
	/*
	 * find doctor detail by specialist 
	 */
	List<DoctorDetail> findBySpecialist(String specialist);
}
		