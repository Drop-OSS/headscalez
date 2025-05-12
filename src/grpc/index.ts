import { HeadscaleService } from "..";

import { HeadscaleServiceClient } from "./generated/headscale/v1/headscale.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

class HeadscaleControlService {
  private service: HeadscaleService;
  client: HeadscaleServiceClient;

  constructor(service: HeadscaleService) {
    this.service = service;
    const transport = new GrpcWebFetchTransport({
      baseUrl: this.service.endpoint,
    });
    this.client = new HeadscaleServiceClient(transport);
  }
}
