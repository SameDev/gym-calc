import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/auth.guard';

export function Auth() {
  return applyDecorators(
    UseGuards(JwtAuthGuard)
  );
}