import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  result: boolean;
}
