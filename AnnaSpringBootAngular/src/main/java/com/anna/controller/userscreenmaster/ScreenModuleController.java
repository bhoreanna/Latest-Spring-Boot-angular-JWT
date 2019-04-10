package com.anna.controller.userscreenmaster;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anna.boinerface.userscreenmaster.ScreenModuleServiceInterface;
import com.anna.component.User;
import com.anna.component.userscreenmaster.ScreenModule;
// 192.168.10.164:9991/screenmodule/screenModuleList
@RestController
@RequestMapping("/screenmodule")
//@CrossOrigin(origins = "http://192.168.10.165:4200", allowedHeaders = "*")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

//@CrossOrigin(origins = "http://192.168.10.165:8082", allowedHeaders = "*") //Tomcat
//@CrossOrigin(origins = "http://192.168.8.105:4200", allowedHeaders = "*")
public class ScreenModuleController {

	@Autowired
	 ScreenModuleServiceInterface screenModuleService;
	
	public ScreenModuleController() {
	}

	
	@RequestMapping(value = "/screenModuleList")
	public List<ScreenModule> getScreenModuleList() {
		System.out.println("i am in userList in main Controllar");
		List<ScreenModule> screenModuleList = screenModuleService.getScreenModuleList();
		System.out.println("User List Size in Controller: " + screenModuleList.size());
		return screenModuleList;
	}
	
}
