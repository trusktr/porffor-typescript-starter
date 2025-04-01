const c = 4

interface StringOrNumberSum {
	(a: number, b: number): number
	(a: string, b: string): string
}

export class Summer {
	sum(a: i32, b: i32) {
		return a + b + c
	}

	overloaded: StringOrNumberSum = (a, b) => {
		// @ts-expect-error shhhhh typescript, both strings or both numbers
		return a + b
	}
}
