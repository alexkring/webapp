package com.alexkring.webapp;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AppController {

	@GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}

	@GetMapping("/model")
    public String getModel() {
        return "Called /model endpoint!";
    }

	@GetMapping("/api/user/")
	public String getUser() {
		return "Called get /api/user endpoint!";
	}

	@GetMapping("/api/users/")
	public User[] getUsers() {
		User[] userList = new User[1];
		User dummyUser = new User();
		dummyUser.first_name = "Alex";
		dummyUser.last_name = "Kring";
		dummyUser.role = "Admin";
		dummyUser.phone_number = "415-215-2135";
		dummyUser.email = "awkring@gmail.com";
		userList[0] = dummyUser;
		return userList;
	}

	@PostMapping("/api/user/")
	public User createUser(@RequestBody User user) {
		// TODO:
		// Process the user data and save it to the database
		// ...
		return user;
	}
}