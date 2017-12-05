package ch.keepcalm.react;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author marcelwidmer
 */
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
//
//
//@RestController(value = "/api/demo")
//@Slf4j
//class DemoController{
//
//
//	@GetMapping
//	public ResponseEntity<Resources<String>> get(@RequestParam(value = "request", defaultValue = "Hello from DemoController") String request) {
//		log.info("get method is called. " + request);
//		return new ResponseEntity(request, HttpStatus.OK);
//	}
//
//
//}