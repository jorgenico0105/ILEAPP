import { z } from 'zod';

const dataSchema = z.object({
  Codigo: z.string(),
  Apellido: z.string().optional(),
  RazonSocial: z.string().optional(),
  Representante: z.string().optional(),
  Ruc: z.string().optional(),
  CodigoCliente: z.string().optional(),
  NombreVendedor: z.string().optional(),
  CodigoSector: z.string().optional(),
  CodigoTipo: z.string().optional(),
  CodigoVendedor:z.string().optional(),
  CodigoCobrador:z.string().optional(),
  CodigoCuenta:z.string().optional(),
  CodigoUsuario:z.string().optional(),
  CodigoPais:z.string().optional(),
  CodigoCiudad:z.string().optional(),
  LimiteCredito:z.number().optional(),
  DiasCredito:z.number().optional(),
  ParteRelacionada:z.number().optional(),
  CodigoSexo:z.number().optional(),
  Descuento:z.number().optional(),
  NombreSector: z.string().optional(),
  CodigoCanal: z.string().optional(),
  NombreCanal: z.string().optional(),
  CodigoSubcanal: z.string().optional(),
  NombreSubcanal: z.string().optional(),
  Dia: z.string().optional(),
  Semana: z.string().optional(),
  Secuencia: z.string().optional(),
  Frecuencia: z.string().optional(),
  Estado: z.string().optional(),
});

const dataArraySchema = z.array(dataSchema);

export { dataSchema, dataArraySchema };
