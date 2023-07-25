import { ApiProperty } from '@nestjs/swagger'

export class CreateRecipeDto {
    @ApiProperty()
    readonly title: string

    @ApiProperty()
    readonly description: string

    @ApiProperty({ required: false })
    readonly image?: string
}
