import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function BreadcrumpComponent() {
  return (
    <div>
      <Breadcrumb spacing="8px" separator="|">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/reimbursment/all">Unassigned Request</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/reimbursment/history">Request History</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumpComponent;
