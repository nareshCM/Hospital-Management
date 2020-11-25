package org.hospital.management.controller;

import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.hospital.management.service.DoctorServiceImplementation;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(controllers = DoctorController.class)
public class DoctorControllerTest {
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	DoctorServiceImplementation doctorServiceImplementation;

	@InjectMocks
	DoctorController doctorController;

	public static final MediaType mediaType = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

	/*
	 * get doctor detail controller test
	 */
	@Test
	void getDoctorController() throws Exception {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		doReturn(doctorDetail).when(doctorServiceImplementation).doctors();
		mockMvc.perform(get("/doctor/details")).andExpect(status().isOk());
	}

	/*
	 * insert doctor detail controller test
	 */
	@Test
	void insertDoctorTest() throws Exception {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorData = new DoctorDetail();
		doctorData.setName("John");
		doctorData.setAvailability(true);
		doctorData.setSpecialist("cardioc");
		doctorData.setCreationDate(new Date());
		doReturn(doctorDetail).when(doctorServiceImplementation).insertDoctorService(doctorData);
		mockMvc.perform(post("/doctor/add").contentType(mediaType).content(jsonConverter(doctorData)))
				.andExpect(status().isOk());
	}

	/*
	 * find doctor detail controller test
	 */
	@Test
	void findDoctorTest() throws Exception {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorfind = new DoctorDetail();
		doctorfind.setSpecialist("cardioc");
		doReturn(doctorDetail).when(doctorServiceImplementation).doctors(doctorfind.getSpecialist());
		mockMvc.perform(get("/doctor/find?specialist=/{specialist}", "cardioc")).andExpect(status().isOk());
	}

	/*
	 * delete doctor detail controller test
	 */
	@Test
	void deleteDoctorTest() throws Exception {
		List<DoctorDetail> doctorDetail = new ArrayList<>();
		DoctorDetail doctorfind = new DoctorDetail();
		doctorfind.setId("1");
		doReturn(doctorDetail).when(doctorServiceImplementation).deleteDoctorService(doctorfind.getId());
		mockMvc.perform(get("/doctor/delete?id=/{id}", 1L)).andExpect(status().isOk());
	}

	/*
	 * to convet Json to byte array
	 */
	byte[] jsonConverter(Object doctorData) throws JsonProcessingException {
		ObjectMapper objMap = new ObjectMapper();
		return objMap.writeValueAsBytes(doctorData);
	}
}
