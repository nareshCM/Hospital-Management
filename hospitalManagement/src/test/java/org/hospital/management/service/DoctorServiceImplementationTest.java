package org.hospital.management.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hospital.management.controller.DoctorController;
import org.hospital.management.dao.DoctorRepo;
import org.hospital.management.model.DoctorDetail;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;



@SpringBootTest
public class DoctorServiceImplementationTest {
	
	@Mock
	DoctorRepo doctorRepo;
	
	@InjectMocks
	DoctorServiceImplementation doctorService;
	
	/*
	 * get doctor detail service test 
	 */
	@Test
	void getDoctorDetailTest() {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorData = new DoctorDetail();
		doctorData.setName("John");
		doctorData.setAvailability(true);
		doctorData.setSpecialist("cardioc");
		doctorData.setCreationDate(new Date());
		doctorDetail.add(doctorData);
		doReturn(1L).when(doctorRepo).count();
		doReturn(doctorDetail).when(doctorRepo).findAll();
		assertEquals("John", doctorService.doctors().get(0).getName());
	}
	
	/*
	 * insert doctor detail service test 
	 */
	@Test
	void insertDoctorServiceTest() {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorData = new DoctorDetail();
		doctorData.setName("John");
		doctorData.setAvailability(true);
		doctorData.setSpecialist("cardioc");
		doctorData.setCreationDate(new Date());
		doctorDetail.add(doctorData);
		doReturn(doctorData).when(doctorRepo).save(Mockito.any(DoctorDetail.class));
		doReturn(1L).when(doctorRepo).count();
		doReturn(doctorDetail).when(doctorRepo).findAll();
		assertEquals(1, doctorService.insertDoctorService(doctorData).size());
	}
	
	/*
	 * delete doctor detail service test 
	 */
	@Test
	void deleteDoctorServiceTest() {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorData = new DoctorDetail();
		doctorData.setName("John");
		doctorData.setAvailability(true);
		doctorData.setSpecialist("cardioc");
		doctorData.setCreationDate(new Date());
		doctorDetail.add(doctorData);
		doNothing().when(doctorRepo).deleteById("1");
		doReturn(1L).when(doctorRepo).count();
		assertEquals(0, doctorService.deleteDoctorService("1").size());
	}
	
	@Test
	void updateDoctorServiceTest() {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorData = new DoctorDetail();
		DoctorDetail matchedData = new DoctorDetail();
		doctorData.setId("1");
		doctorData.setName("John");
		doctorData.setAvailability(true);
		doctorData.setSpecialist("cardioc");
		doctorData.setCreationDate(new Date());
		doctorDetail.add(doctorData);
		when(doctorRepo.findById("1")).thenReturn(Optional.of(doctorData));
		//matchedData = doReturn(Mockito.any(DoctorDetail.class)).when(doctorRepo).findById("1").get();
		doReturn(doctorData).when(doctorRepo).save(Mockito.any(DoctorDetail.class));
		assertEquals(1, doctorService.doctors().size());
	}
}
