import { IsString, IsNotEmpty, IsEmail } from 'class-validator'

export class RegistrationDTO {

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email

  @IsNotEmpty()
  @IsString()
  public firstname

  @IsNotEmpty()
  @IsString()
  public lastname

  @IsNotEmpty()
  @IsString()
  public password

}
