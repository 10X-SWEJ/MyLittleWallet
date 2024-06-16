export type TData = {
   id: number;
   status: "income" | "expense";
   title: string;
   date: string;
   category: string;
   tags: string[];
   netAmount: number;
   image: string;
   remark: string;
   archive: boolean;
   meta: {
      color: string;
      icon: string;
   };
};
