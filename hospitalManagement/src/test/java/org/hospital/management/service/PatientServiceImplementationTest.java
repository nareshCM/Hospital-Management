package org.hospital.management.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hospital.management.dao.DoctorRepo;
import org.hospital.management.dao.PatientRepo;
import org.hospital.management.model.DoctorDetail;
import org.hospital.management.model.PatientDetail;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PatientServiceImplementationTest {

	@Mock
	PatientRepo patientRepo;
	
	@InjectMocks
	PatientServiceImplementation patientService;
	
	
	/*
	 * get patient detail service test 
	 */
	@Test
	void getPatientDetailTest() {
		List<PatientDetail> patientDetailList = new ArrayList<>();
		PatientDetail patientDetail = new PatientDetail();
		patientDetail.setName("John");
		patientDetail.setDisease("cardioc");
		patientDetail.setHistory("TB");
		patientDetail.setCreationDate(new Date());
		patientDetailList.add(patientDetail);
		doReturn(1L).when(patientRepo).count();
		doReturn(patientDetailList).when(patientRepo).findAll();
		assertEquals("John", patientService.patients().get(0).getName());
	}
	
	/*
	 * insert patient detail service test 
	 */
	@Test
	void insertPatientServiceTest() {
		List<PatientDetail> patientDetailList = new ArrayList<>();
		PatientDetail patientDetail = new PatientDetail();
		patientDetail.setName("John");
		patientDetail.setDisease("cardioc");
		patientDetail.setHistory("TB");
		patientDetail.setCreationDate(new Date());
		patientDetailList.add(patientDetail);
		doReturn(patientDetail).when(patientRepo).save(Mockito.any(PatientDetail.class));
		doReturn(1L).when(patientRepo).count();
		doReturn(patientDetailList).when(patientRepo).findAll();
		assertEquals(1, patientService.insertPatientService(patientDetail).size());
	}
	
	/*
	 * delete patient detail service test 
	 */
	@Test
	void deletePatientServiceTest() {
		List<PatientDetail> patientDetailList = new ArrayList<>();
		PatientDetail patientDetail = new PatientDetail();
		patientDetail.setName("John");
		patientDetail.setDisease("cardioc");
		patientDetail.setHistory("TB");
		patientDetail.setCreationDate(new Date());
		patientDetailList.add(patientDetail);
		doNothing().when(patientRepo).deleteById("1");
		doReturn(1L).when(patientRepo).count();
		assertEquals(0, patientService.deletePatientService("1").size());
	}
	
}
