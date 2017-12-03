package ch.keepcalm.react;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}


@RestController(value = "/api/demo")
@Slf4j
class DemoController{


	@GetMapping
	public ResponseEntity<Resources<String>> get(@RequestParam(value = "request", defaultValue = "Hello from DemoController") String request) {
		log.info("get method is called.");
		return new ResponseEntity(request, HttpStatus.OK);
	}


	@PatchMapping
	public ResponseEntity<Resources<String>> patch(@RequestBody String message) {
		log.info("patch method is called.");
		return new ResponseEntity(message, HttpStatus.CREATED);
	}
}