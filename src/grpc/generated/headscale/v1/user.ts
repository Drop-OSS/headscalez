// @generated by protobuf-ts 2.10.0
// @generated from protobuf file "headscale/v1/user.proto" (package "headscale.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * @generated from protobuf message headscale.v1.User
 */
export interface User {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: string display_name = 4;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string email = 5;
     */
    email: string;
    /**
     * @generated from protobuf field: string provider_id = 6;
     */
    providerId: string;
    /**
     * @generated from protobuf field: string provider = 7;
     */
    provider: string;
    /**
     * @generated from protobuf field: string profile_pic_url = 8;
     */
    profilePicUrl: string;
}
/**
 * @generated from protobuf message headscale.v1.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: string picture_url = 4;
     */
    pictureUrl: string;
}
/**
 * @generated from protobuf message headscale.v1.CreateUserResponse
 */
export interface CreateUserResponse {
    /**
     * @generated from protobuf field: headscale.v1.User user = 1;
     */
    user?: User;
}
/**
 * @generated from protobuf message headscale.v1.RenameUserRequest
 */
export interface RenameUserRequest {
    /**
     * @generated from protobuf field: uint64 old_id = 1;
     */
    oldId: bigint;
    /**
     * @generated from protobuf field: string new_name = 2;
     */
    newName: string;
}
/**
 * @generated from protobuf message headscale.v1.RenameUserResponse
 */
export interface RenameUserResponse {
    /**
     * @generated from protobuf field: headscale.v1.User user = 1;
     */
    user?: User;
}
/**
 * @generated from protobuf message headscale.v1.DeleteUserRequest
 */
export interface DeleteUserRequest {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
}
/**
 * @generated from protobuf message headscale.v1.DeleteUserResponse
 */
export interface DeleteUserResponse {
}
/**
 * @generated from protobuf message headscale.v1.ListUsersRequest
 */
export interface ListUsersRequest {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
}
/**
 * @generated from protobuf message headscale.v1.ListUsersResponse
 */
export interface ListUsersResponse {
    /**
     * @generated from protobuf field: repeated headscale.v1.User users = 1;
     */
    users: User[];
}
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("headscale.v1.User", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 4, name: "display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "provider_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "provider", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "profile_pic_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0n;
        message.name = "";
        message.displayName = "";
        message.email = "";
        message.providerId = "";
        message.provider = "";
        message.profilePicUrl = "";
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 3:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* string display_name */ 4:
                    message.displayName = reader.string();
                    break;
                case /* string email */ 5:
                    message.email = reader.string();
                    break;
                case /* string provider_id */ 6:
                    message.providerId = reader.string();
                    break;
                case /* string provider */ 7:
                    message.provider = reader.string();
                    break;
                case /* string profile_pic_url */ 8:
                    message.profilePicUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* google.protobuf.Timestamp created_at = 3; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string display_name = 4; */
        if (message.displayName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.displayName);
        /* string email = 5; */
        if (message.email !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.email);
        /* string provider_id = 6; */
        if (message.providerId !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.providerId);
        /* string provider = 7; */
        if (message.provider !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.provider);
        /* string profile_pic_url = 8; */
        if (message.profilePicUrl !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.profilePicUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor() {
        super("headscale.v1.CreateUserRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "picture_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.displayName = "";
        message.email = "";
        message.pictureUrl = "";
        if (value !== undefined)
            reflectionMergePartial<CreateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string display_name */ 2:
                    message.displayName = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* string picture_url */ 4:
                    message.pictureUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string display_name = 2; */
        if (message.displayName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.displayName);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* string picture_url = 4; */
        if (message.pictureUrl !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.pictureUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.CreateUserRequest
 */
export const CreateUserRequest = new CreateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserResponse$Type extends MessageType<CreateUserResponse> {
    constructor() {
        super("headscale.v1.CreateUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<CreateUserResponse>): CreateUserResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CreateUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserResponse): CreateUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* headscale.v1.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* headscale.v1.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.CreateUserResponse
 */
export const CreateUserResponse = new CreateUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RenameUserRequest$Type extends MessageType<RenameUserRequest> {
    constructor() {
        super("headscale.v1.RenameUserRequest", [
            { no: 1, name: "old_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "new_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RenameUserRequest>): RenameUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.oldId = 0n;
        message.newName = "";
        if (value !== undefined)
            reflectionMergePartial<RenameUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RenameUserRequest): RenameUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 old_id */ 1:
                    message.oldId = reader.uint64().toBigInt();
                    break;
                case /* string new_name */ 2:
                    message.newName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RenameUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 old_id = 1; */
        if (message.oldId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.oldId);
        /* string new_name = 2; */
        if (message.newName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.newName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.RenameUserRequest
 */
export const RenameUserRequest = new RenameUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RenameUserResponse$Type extends MessageType<RenameUserResponse> {
    constructor() {
        super("headscale.v1.RenameUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<RenameUserResponse>): RenameUserResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RenameUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RenameUserResponse): RenameUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* headscale.v1.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RenameUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* headscale.v1.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.RenameUserResponse
 */
export const RenameUserResponse = new RenameUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteUserRequest$Type extends MessageType<DeleteUserRequest> {
    constructor() {
        super("headscale.v1.DeleteUserRequest", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteUserRequest>): DeleteUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0n;
        if (value !== undefined)
            reflectionMergePartial<DeleteUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserRequest): DeleteUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.DeleteUserRequest
 */
export const DeleteUserRequest = new DeleteUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteUserResponse$Type extends MessageType<DeleteUserResponse> {
    constructor() {
        super("headscale.v1.DeleteUserResponse", []);
    }
    create(value?: PartialMessage<DeleteUserResponse>): DeleteUserResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<DeleteUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserResponse): DeleteUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.DeleteUserResponse
 */
export const DeleteUserResponse = new DeleteUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListUsersRequest$Type extends MessageType<ListUsersRequest> {
    constructor() {
        super("headscale.v1.ListUsersRequest", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ListUsersRequest>): ListUsersRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0n;
        message.name = "";
        message.email = "";
        if (value !== undefined)
            reflectionMergePartial<ListUsersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersRequest): ListUsersRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListUsersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.ListUsersRequest
 */
export const ListUsersRequest = new ListUsersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListUsersResponse$Type extends MessageType<ListUsersResponse> {
    constructor() {
        super("headscale.v1.ListUsersResponse", [
            { no: 1, name: "users", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<ListUsersResponse>): ListUsersResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.users = [];
        if (value !== undefined)
            reflectionMergePartial<ListUsersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersResponse): ListUsersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated headscale.v1.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListUsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated headscale.v1.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message headscale.v1.ListUsersResponse
 */
export const ListUsersResponse = new ListUsersResponse$Type();
