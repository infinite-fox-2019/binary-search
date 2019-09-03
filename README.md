# binary-search
SET start to zero
SET end to length of array MINUS one
WHILE start LESS THAN or EQUAL to end

	SET tengah to (start PLUS end) DIVIDED by 2 and round it to the next-lowest integer

	IF array of tengah EQUAL to search parameter
		RETURN tengah
	ELSE IF array of tengah LESS THAN search parameter
		SET start to tengah PLUS one
	ELSE
		SET end to tengah MINUS one
	ENDIF

ENDWHILE

RETURN MINUS one
