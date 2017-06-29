import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'welcome' }) //1: 使用 @Pipe 装饰器定义 Pipe 的 metadata 信息，如 Pipe 的名称 - 即 name 属性 

export class WelcomePipe implements PipeTransform {
	transform(value: string): string { //2: 实现 PipeTransform 接口中定义的 transform 方法
		if (!value) return value;
		if (typeof value !== 'string') {
			throw new Error('Invalid pipe argument for WelcomePipe');
		}
		return "Welcome to " + value;
	}
}
