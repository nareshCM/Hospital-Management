package org.hospital.management.controller;

import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.hospital.management.model.PatientDetail;
import org.hospital.management.service.DoctorServiceImplementation;
import org.hospital.management.service.PatientServiceImplementation;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = PatientController.class)
public class PatientControllerTest {
	@Autowired
    private MockMvc mockMvc;
	
	@MockBean
	PatientServiceImplementation patientServiceImplementation;
	
	@InjectMocks
	PatientController patientController;
	
	/*
	 * get patient detail controller test
	 */
	@Test
	void getDoctorController() throws Exception {
		List<PatientDetail> patientDetail = new ArrayList<>();
		doReturn(patientDetail).when(patientServiceImplementation).patients();
		mockMvc.perform(get("/patient/details")).andExpect(status().isOk());
	}
	
//	@Test
//	void insertDoctorTest() throws Exception {
//		List<DoctorDetail> doctorDetail = new ArrayList<>();
//		DoctorDetail doctorData = new DoctorDetail();
//		doctorData.setName("John");
//		doctorData.setAvailability(true);
//		doctorData.setSpecialist("cardioc");
//		doctorData.setCreationDate(new Date());
//		doReturn(doctorDetail).when(doctorServiceImplementation).insertDoctorService(doctorData);
//		mockMvc.perform(post("/doctor/add").contentType(APPLICATION_JSON_UTF8).content(doctorData)).andExpect(status().isOk());
//	}
	
	
	/*
	 * delete patient detail controller test
	 */
	@Test
	void deleteDoctorTest() throws Exception {
		List<PatientDetail> patientDetail = new ArrayList<>();
		PatientDetail patientfind = new PatientDetail();
		patientfind.setId("1");
		doReturn(patientDetail).when(patientServiceImplementation).deletePatientService(patientfind.getId());
		mockMvc.perform(get("/patient/delete?id=/{id}",1L)).andExpect(status().isOk());
	}
}
