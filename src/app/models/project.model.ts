export class ProjectModel {
   name!: string;
   description!: string;
   teams!: string;
   tags!: string;
   createdAt!: string;
   createdBy!: Date;
   isActive!: boolean;
}
export class ComponentModel {
   name!: string;
   description!: string;
   inputParamName!: string;
   inputParamDescription!: string;
   inputParamValue!: string;
   outPutParamName!: string;
   outPutParamValue!: string;
   outPutParamDescription!: string;
   lifeCycle!: [];
   createdAt!: Date;
   createdBy!: string;
   isActive!: boolean;
}
export class TypeOfProjectModel {
   name!: string;
   
}