package com.trs.testing;

import org.junit.jupiter.api.*;


@DisplayName("Disable test")
class DisableTest {

	@Test
	@Disabled
	void disableTest() {
		Assertions.assertEquals(3, 2);
	}
}
