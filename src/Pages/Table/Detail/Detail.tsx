import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
   const params = useParams();
   const navigate = useNavigate();

   console.log(params);

   return (
      <div>
         <div>
            <button onClick={() => navigate("/")}>Go back</button>
         </div>
      </div>
   );
}
