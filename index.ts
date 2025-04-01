import type {} from 'porffor/compiler/builtins/porffor.d.ts'

// TODO move this to porffor
declare module 'porffor/compiler/builtins/porffor.d.ts' {
	interface PorfforGlobal {
		numberLog: (value: number) => void
		miniLog: (value: string | number) => void
	}
}

import {Summer} from './Summer'
import {ProtoTest} from './ProtoTest'

Porffor.miniLog(new Summer().sum(1, 2.5))
Porffor.miniLog(new Summer().overloaded(1, 2.5))
Porffor.miniLog(new Summer().overloaded('foo', 'bar'))
Porffor.miniLog(new Summer().overloaded('foo', 123)) // type error (good)

ProtoTest.prototype.foo = 123
Porffor.miniLog(ProtoTest.prototype.foo)
ProtoTest.prototype.foo = 456
Porffor.miniLog(new ProtoTest().foo)

// Not currently allowed: //////////////////////////////////////////////////////

// @ts-ignore
// ProtoTest.prototype.sub = function (a: number, b: number) {
// 	return a - b
// }

// @ts-ignore
// Porffor.numberLog(new ProtoTest().sub(1, 2))

// No closures yet:
// class ClosureTest {
// 	sum(a: i32, b: i32) {
// 		const c = 4
// 		function doit() {
// 			return a + b + c
// 		}
// 		return doit()
// 	}
// }
